module Mutations
  class UpdateReaction < BaseMutation
    field :reaction, Types::ReactionType, null: true
    field :errors, [String], null: true

    argument :reaction_type_id, Int, required: true
    argument :id, Int,"ID of reaction", required: true



    def resolve(attrs)
      reaction = Reaction.find(attrs[:id])
      if current_user.id == reaction.user_id
        reaction.reaction_type =attrs[:reaction_type]
        reaction.save
        { reaction: reaction, errors: nil }
      else
        {reaction:nil, errors: ["#{current_user.email} does not have this reaction"]}
      end

      rescue ActiveRecord::RecordNotFound
        {reaction:nil, errors: ["Reaction not found"]}
    end

    def authorized?(_)
      current_user.present?
    end

  end
end
