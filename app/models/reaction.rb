class Reaction < ApplicationRecord
  belongs_to :user
  include BelongsToStudy
  belongs_to :reaction_type
  validates :reaction_type_id, :nct_id, :user_id, presence: true
  validates :nct_id,  uniqueness: { scope: :user_id, message:"User has one reactions per study"}
  validate :reaction_type_exists
  validate :user_exists


  def user_exists
    if User.exists?(self.user_id)
     return true
    else
     self.errors.add(:error, "Unable to find this user.")
     return false
    end
  end

 def reaction_type_exists
   if ReactionType.exists?(self.reaction_type_id)
    return true
   else
    self.errors.add(:error, "Unable to find this user.")
    return false
   end
 end
end
