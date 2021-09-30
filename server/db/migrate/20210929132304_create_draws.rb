class CreateDraws < ActiveRecord::Migration[6.1]
  def change
    create_table :draws do |t|
      t.string :question
      t.integer :num
      t.timestamps
    end
  end
end
