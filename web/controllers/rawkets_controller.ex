defmodule Frankencade.RawketsController do
    use Frankencade.Web, :controller

    def index(conn, _params) do
        #render conn, "index.html"
        conn
        |> put_layout(false)
        |> render "index.html" 
    end

    def controller(conn, _params) do
      conn
      |> put_layout(false)
      |> render "controller.html"
    end
end
