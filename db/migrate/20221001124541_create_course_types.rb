class CreateCourseTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :course_types do |t|
      t.string :title
      t.boolean :active

      t.timestamps
    end
  end
end
