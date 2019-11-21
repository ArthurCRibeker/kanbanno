class Api::BoardMembershipsController < ApplicationController

  def create
    new_member = User.find_by(email: membership_params[:email])
    if new_member
      board_membership = BoardMembership.new(board_id: membership_params[:board_id], member_id: new_member.id)
      if board_membership.save
        render json: ["Member successfully added."]
      else
        render json: ["User is already a member of this board."]
      end
    else
      render json: ["This user does not exist."]
    end
  end

  def destroy
  end

  private
  def membership_params
    params.require(:membership).permit(:email, :board_id);
  end

end