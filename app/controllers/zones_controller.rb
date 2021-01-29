class ZonesController < ApplicationController

  # GET /zones
  def index
    @zones = Zone.all

    render json: @zones
  end

  def add_plant_to_zones
    @zone = Zone.find(params[:zone_id])
    @plant = Plant.find(params[:plant_id])
    @plant.zones << @zone
    render json: @plant, include: :zones
  end
end
