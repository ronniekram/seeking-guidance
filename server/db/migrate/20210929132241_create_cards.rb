class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :cardType
      t.string :summary
      t.string :image
      t.string :upright
      t.string :reversed
      t.boolean :rightSide
      t.timestamps
    end
  end
end
