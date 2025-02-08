import { File } from '../components/file.component.ts';
import { Folder } from '../composites/folder.component.ts';

export class FileSystemService {
  static main() {
    const file1 = new File('File 1');
    const file2 = new File('File 2');
    const file3 = new File('File 3');
    const file4 = new File('File 4');
    const file5 = new File('File 5');

    const folder1 = new Folder('Folder 1');
    const folder2 = new Folder('Folder 2');
    const folder3 = new Folder('Folder 3');
    const folder4 = new Folder('Folder 4');
    const folder5 = new Folder('Folder 5');

    folder1.add(file1);
    folder1.add(file2);
    folder2.add(file3);
    folder2.add(file4);
    folder3.add(folder1);

    folder3.add(folder2);
    folder4.add(folder3);
    const root = new Folder('Root');
    root.add(folder4);
    root.add(file5);
    root.add(folder5);
    root.showDetails();
  }
}
