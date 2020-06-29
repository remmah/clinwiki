class ModifyDefaultReactionConfig < ActiveRecord::Migration[5.2]
  def up
    remove_column :sites, :reactions_config, :text
    add_column :sites, :reactions_config, :text, default: ReactionKind.where.not(name:"skull_and_cross_bones").select(:name).as_json(except: :id).to_json
  end
  def down
    remove_column :sites, :reactions_config, :text
    add_column :sites, :reactions_config, :text, default: ReactionKind.all.select(:name).as_json(except: :id).to_json
  end
end
