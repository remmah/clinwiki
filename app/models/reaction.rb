class Reaction < ApplicationRecord
  belongs_to :user
  include BelongsToStudy
  validates :reaction_type, presence: true
  validates :nct_id,  uniqueness: { scope: :user_id, message:"User has one reactions per study"}
end
