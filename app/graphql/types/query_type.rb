module Types
  class QueryType < BaseObject
    field :search,
          SearchResultSetType,
          "Searches params by searchHash on server and `params` argument into it",
          null: true do
      argument :search_hash, String, required: false
      argument :params, type: SearchInputType, required: false
    end

    field :agg_buckets, SearchResultSetType, null: false do
      argument :search_hash, String, required: false
      argument :params, type: SearchInputType, required: false
    end

    field :autocomplete, SearchResultSetType, null: false do
      argument :search_hash, String, required: false
      argument :params, type: SearchInputType, required: false
    end

    field :crowd_agg_buckets, SearchResultSetType, null: false do
      argument :params, type: SearchInputType, required: true
    end

    field :health, HealthType, null: false
    field :site, SiteType, "If id is missing, returns current site. If id == 0, returns default site", null: true do
      argument :id, type: Int, required: false
    end

    field :study, StudyType, null: true do
      argument :nct_id, type: String, required: true
    end

    field :intervention, InterventionType, null: true do
      argument :id, type: Integer, required: true
    end

    field :feed, FeedType, null: true do
      argument :id, type: Integer, required: true
    end

    field :me, UserType, "Current logged in user", null: true
    field :search_hash, String, "Search hash for search params", null: false do
      argument :params, type: SearchInputType, required: true
    end

    field :search_params, SearchParamsType, "Search params from hash", null: true do
      argument :hash, type: String, required: false
    end

    field :workflows_view, WorkflowsViewType, "Workflows config", null: false

    DISPLAY_NAMES = {
      'browse_condition_mesh_terms' => 'Browse Condition Mesh Terms',
      'browse_interventions_mesh_terms' => 'Browse Intervention Mesh Terms',
      'facility_countries' => 'Countries'
    }

    def search(search_hash: nil, params: nil)
      context[:search_params] = fetch_and_merge_search_params(search_hash: search_hash, params: params)
      search_service = SearchService.new(context[:search_params])
      search_service.search
    end

    def agg_buckets(search_hash: nil, params: nil)
      params = fetch_and_merge_search_params(search_hash: search_hash, params: params)
      search_service = SearchService.new(params)
      Hashie::Mash.new(
        aggs: search_service.agg_buckets_for_field(field: params[:agg], current_site: context[:current_site]),
      )
    end

    def crowd_agg_buckets(search_hash: nil, params: nil)
      params = fetch_and_merge_search_params(search_hash: search_hash, params: params)
      search_service = SearchService.new(params)
      Hashie::Mash.new(
        aggs: search_service.agg_buckets_for_field(field: params[:agg], current_site: context[:current_site], is_crowd_agg: true),
      )
    end

    def autocomplete(search_hash: nil, params: nil)
      params = fetch_and_merge_search_params(search_hash: search_hash, params: params)
      search_service = SearchService.new(params)
      # fields = ['browse_condition_mesh_terms', 'browse_interventions_mesh_terms', 'facility_countries']
      fields = ['browse_condition_mesh_terms', 'browse_interventions_mesh_terms', 'facility_countries']
      list = []
      fields.each do |field_name|
        result = search_service.agg_buckets_for_field(field: field_name, current_site: context[:current_site])
        list << Hashie::Mash.new(
          name: DISPLAY_NAMES[field_name],
          results: result[field_name.to_sym][:buckets]
        )
      end
      Hashie::Mash.new(autocomplete: list)
    end

    # autocomplete {
    #   key
    #   docCount
    #   type
    # }

  #   aggs {
  #     name
  #     buckets {
  #       key
  #       docCount
  #       __typename
  #     }
  #     __typename
  #   }
  #   __typename
  # }

    def health
      ActiveRecord::Base.establish_connection
      ActiveRecord::Base.connection
      {
        healthy: ActiveRecord::Base.connected?,
      }
    end

    def site(id: nil)
      case id
      when nil
        context[:current_site]
      when 0
        Site.default
      else
        Site.find_by(id: id)
      end
    end

    def study(nct_id:)
      Study.find_by(nct_id: nct_id)
    end

    def intervention(id:)
      Intervention.find_by(id: id)
    end

    def feed(id:)
      Feed.find_by(id: id)
    end

    def me
      context[:current_user]
    end

    def search_hash(params:)
      params_hash = params.to_h.deep_symbolize_keys
      ShortLink.from_long(params_hash).short
    end

    def search_params(hash: nil)
      return nil if hash.nil?

      link = ShortLink.from_short(hash)
      return nil if link.nil?

      JSON.parse(link.long).deep_symbolize_keys
    end

    def workflows_view
      WorkflowsView.instance.view
    end

    private

    def fetch_and_merge_search_params(search_hash: nil, params: nil)
      if search_hash
        link = ShortLink.from_short(search_hash)
        return if link.nil?

        res = JSON.parse(link.long).deep_symbolize_keys
        res = res.merge(params.to_h) if params.present?
        res
      else
        params.to_h
      end
    end
  end
end
