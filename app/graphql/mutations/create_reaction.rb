module Mutations
  class CreateReaction < BaseMutation
    field :reaction, Types::ReactionType, null: true
    field :errors, [String], null: true

    argument :reaction_type, String, required: true
    argument :nct_id, String, required: true


    def resolve(attrs)
      reaction = Reaction.new(attrs.to_h)
      reaction.user_id = current_user_id
      ActiveRecord::Base.transaction do
        reaction.save!
        { reaction: reaction, errors: nil }
      end

    end

    def authorized?(_)
      current_user.present?
    end

  end
end
