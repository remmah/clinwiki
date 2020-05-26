module Types
  class ReactionType < BaseObject
    field :id, Int, "Id", null: false
    field :reaction_type,String,"Type of reaction such as downvote", null:false
    field :user ,UserType, null: false
    field :study,StudyType, null: false
  end
end
