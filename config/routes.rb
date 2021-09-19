Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'careers/index', to: 'careers#index'
      post 'careers/create'
      get 'careers/show/:id', to: 'careers#show'
      delete 'careers/destroy/:id', to: 'careers#destroy'
      put 'careers/update/:id', to: 'careers#update'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
