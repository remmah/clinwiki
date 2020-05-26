class ReactionType < ApplicationRecord
  has_many :reactions
  validates :name, presence: true
end
