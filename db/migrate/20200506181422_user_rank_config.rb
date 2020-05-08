class UserRankConfig < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :user_rank, :text, default: "#{{
    default:{gte:0},
    bronze:{gte:26},
    silver:{gte:51},
    gold:{gte:75},
    platinum:{gte:101},
  }.to_json} "
  end
end
