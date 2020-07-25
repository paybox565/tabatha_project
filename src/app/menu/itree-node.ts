export interface ITreeNode {
  name: string;
  showChildren?: boolean;
  sale?: number;
  items?: ITreeNode[];
  sections?: any[];
  id: number;
}
