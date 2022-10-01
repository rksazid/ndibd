class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :code
      t.string :title
      t.text :short_description
      t.integer :subscription_type, default: 0
      t.references :course_type, foreign_key: true
      t.integer :status, default: 0
      t.references :creator, foreign_key: {to_table: :users}
      t.decimal :course_fee
      t.decimal :monthly_fee

      t.timestamps
    end
  end
end
