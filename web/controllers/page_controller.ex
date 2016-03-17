defmodule Frankencade.PageController do
  use Frankencade.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
