class CreateReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :reactions do |t|
      t.string :nct_id, null:false
      t.references :user, null:false, foreign_key: true
      t.string :reaction_type
      t.timestamps
    end
      add_index :reactions,[:user_id, :nct_id], unique: true
  end
end
