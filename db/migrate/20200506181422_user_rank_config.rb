class UserRankConfig < ActiveRecord::Migration[5.2]
  def change
    add_column :sites, :user_rank, :text, default: "#{{
    default:{gte:0, lte:25},
    bronze:{gte:26, lte:50},
    silver:{gte:51, lte:75},
    gold:{gte:75, lte:100},
    platinum:{gte:101, lte:10000000},
  }.to_json} "
  end
end
