class WelcomeController < ApplicationController
  
  def index
  	@contect = ''
  end

  def search
  	hash = {'abc' => 2 , 'def' => 3 , 'ghi' => 4, 'jkl' => 5, 'mno' => 6 , 'pqrs' => 7, 'tuv' => 8, 'wxyz' => 9}
    carect = params[:char]

    if carect != "0"
    	if !params[:allno].nil?
        @text = ''
      	params[:allno].each do |f|
      		@text << hash.key(f.to_i)
      	end
        arr = @text.split(//)
        @contect = Contect.where("substr(lower(name), 1, 1) IN (?)", arr)
      else
        @contect = ''
      end
    else
      @contect = ''
    end
  end

end
