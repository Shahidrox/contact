class CreateContects < ActiveRecord::Migration
  def change
    create_table :contects do |t|
      t.string :name
      t.string :number

      t.timestamps null: false
    end
  end
end
