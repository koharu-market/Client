export interface Option {
  id: string;
  checked: boolean;
  name: string;
  price: number;
  count: number;
  displayOption: 'Y' | 'N';
  type: number;
}
