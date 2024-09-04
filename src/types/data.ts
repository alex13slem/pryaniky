export interface GetDataSuccessResponse {
  error_code: number;
  error_message: string;
  data: Item[];
  profiling: string;
  timings: null;
}

export interface GetDataRejectResponse {
  error_code: number;
  error_text: string;
  data: null;
  profiling: string;
  timings: null;
}

export interface Item {
  id: string;
  documentStatus: string;
  employeeNumber: string;
  documentType: string;
  documentName: string;
  companySignatureName: string;
  employeeSignatureName: string;
  employeeSigDate: string;
  companySigDate: string;
}
