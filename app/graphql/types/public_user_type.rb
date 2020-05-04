module Types
  class PublicUserType < BaseObject
    field :id, Int, "Id", null: false
    field :first_name, String, "First name", null: true
    field :last_name, String, "Last name", null: true
    field :review_count, Integer, "Number of reviews the user has done", null: false
    field :picture_url, String, null: false

  end
end
