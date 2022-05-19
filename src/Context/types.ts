declare module "Store" {
  type Action = { type: unknown; payload: object };

  type SimpleAction = { type: unknown };

  type Reducer<T extends object> = (
    store: T,
    action: Action | SimpleAction
  ) => T;

  type ActionCreator<T extends object> = (payload: T) => Action;

  type SimpleActionCreator = () => SimpleAction;

  type Dispatch =
    | React.DispatchWithoutAction
    | React.Dispatch<Action | SimpleAction>;
}
