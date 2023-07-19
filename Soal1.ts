// Bubble SOrt

function bubbleSort(arr: number[]): number[] {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tukar posisi elemen jika elemen sebelumnya lebih besar
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const nilaiMahasiswa = [80, 65, 90, 75, 85, 70, 95, 60];
const nilaiTerurut = bubbleSort(nilaiMahasiswa);

console.log("nilaiTerurut =", nilaiTerurut);
