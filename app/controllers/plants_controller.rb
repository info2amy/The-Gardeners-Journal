class PlantsController < ApplicationController
  before_action :set_plant, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]


  # GET /plants
  def index
    @plants = Plant.all

    render json: @plants, include: :zones
  end

  # GET /plants/1
  def show
    render json: @plant, include: :zones
  end

  # POST /plants
  def create
    @plant = Plant.new(plant_params)
    @plant.user = @current_user
    if @plant.save
      render json: @plant, status: :created, location: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plants/1
  def update
    if @plant.update(plant_params)
      render json: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /plants/1
  def destroy
    @plant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant
      @plant = Plant.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plant_params
      params.require(:plant).permit(:name, :user_id, :image_url, :plant_type, :deciduous, :bloom_time, :watering, :pruning, :fertilizing)
    end
end
