import fs from 'fs';
import path from 'path';

export function frExample() {
  // fs.mkdir(path.join(__dirname, 'notes'), (error) => {
  //   if (error) {
  //     throw error;
  //   }
  //   console.log('success')
  // });

  fs.writeFile(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    'Hello World',
    error => {
      if (error) {
        throw new Error(error)
      }

      console.log('file was created');
    }
  );

  fs.appendFile(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    ' Form Append file',
    error => {
      if (error) {
        throw new Error(error)
      }

      console.log('file was changed');
    }
  );

  fs.readFile(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    (error, buffer) => {
      if (error) {
        throw new Error(error)
      }

      console.log('FileContent (first var): ', Buffer.from(buffer).toString());
    }
  );

  fs.readFile(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    'utf-8',
    (error, buffer) => {
      if (error) {
        throw error
      }

      console.log('FileContent (second var): ', buffer);
    }
  );

  // fs.rename(
  //   path.join(__dirname, 'notes', 'myNotes.txt'),
  //   path.join(__dirname, 'notes', 'myNotesNew.txt'),
  //   (error) => {
  //     if (error) {
  //       throw new Error(error.toString())
  //     }
  //
  //     console.log('File was renamed: ');
  //   }
  // )
}
