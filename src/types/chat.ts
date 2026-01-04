export interface Message {
  type: "bot" | "user";
  text: string;
  showMenu?: boolean;
  showDetail?: boolean;
  detailType?: string;
  isNew?: boolean;
}

export interface MenuItem {
  id: number;
  label: string;
  response: string;
  hasDetail?: boolean;
  detailType?: string;
}
