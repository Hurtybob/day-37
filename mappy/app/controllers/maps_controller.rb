class MapsController < ApplicationController
  def show

    if params[:search].present?
      @result = Geocoder.search(params[:search]).first
    end
  end
end
