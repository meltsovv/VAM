export interface IChildrenError {
  property: string;
  constraints: {
    [key: string]: string;
  };
  children: Array<IChildrenError>;
}

export class IError {
  data: {
    message: string;
    errors: Array<IChildrenError>;
  } = {
    message: '',
    errors: [],
  };

  meta: {
    timestamp: number;
  } = {
    timestamp: 0,
  };
}
