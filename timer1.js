const argument = process.argv.slice(2).sort((a, b) => a - b);

for (const time of argument) {
  if (isNaN(time)) {
    continue;
  }
  if (time <= 0) {
    continue;
  }
  setTimeout(() => process.stdout.write('\x07'), Number(time) * 1000);
}
