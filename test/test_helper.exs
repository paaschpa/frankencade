ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Frankencade.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Frankencade.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Frankencade.Repo)

