Rails.application.routes.draw do

  mount ActionCable.server => "/cable"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:show, :index]
    resources :messages, except: [:new, :edit]
    get 'messages_search', to: 'messages#search'
    resources :direct_messages, except: [:new, :edit, :update]
    resources :channel_joins, only: [:create, :destroy, :index]
  end



  root to: 'static_pages#root'
end
