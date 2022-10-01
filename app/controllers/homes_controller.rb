class HomesController < ApplicationController
  def index
    @courses = Course.Published.order(:created_at).limit(3)
  end

  def courses
    @courses = Course.Published.order(:created_at)
  end
end
