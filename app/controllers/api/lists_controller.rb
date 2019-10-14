class Api::ListsController < ApplicationController 

  def index
    @lists = @board.lists
  end

  def create
    @list = List.new(list_params)
    @list.board_id = @board.id
    if @list.save
      prevList = @lists[@lists.length - 1]
      @list.prev_list_id = prevList.id
      prevList.next_list_id = @list.id
      @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  private
  def list_params
    params.require(:list).permit(:title)
  end

end