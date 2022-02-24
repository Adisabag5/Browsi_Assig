export enum ApiMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}


export interface ApiResponse{
    [x: string]: string;
    data: any
}

export interface graphData {
    name: string;
    value: number;
  }

export interface GraphComponentContent{
    view: any;
    list: graphData | undefined;
    setListObserver(): void;
    onResize(event: any): void;
}