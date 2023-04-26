import fs from 'fs';

import glob from 'glob';
import strip from 'strip-comments';

// TypeScriptファイルのパターンを指定
const pattern: string = '**/*.tsx';

// TypeScriptファイルを検索
glob(pattern, {}, (err: NodeJS.ErrnoException | null, files: string[]) => {
  if (err) throw err;

  // 各ファイルを処理
  files.forEach((file: string) => {
    // ファイルを読み込む
    const contents: string = fs.readFileSync(file, 'utf8');

    // コメントを削除
    const newContents: string = strip(contents, { preserveNewlines: true });

    // 加工後の内容をコンソールに出力する
    console.log(`Processed file: ${file}`);
    console.log(newContents);
  });

  console.log(`Done. ${files.length} files processed.`);
});
