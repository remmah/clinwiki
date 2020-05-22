class CreateReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :reactions do |t|
      t.string :nct_id, null:false
      t.references :user, null:false
      t.string :type
      t.timestamps
    end
      add_index :user_id, :nct_id, unique: true
  end
end
