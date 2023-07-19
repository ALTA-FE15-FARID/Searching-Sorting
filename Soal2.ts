//Binary Search

interface Employee {
    id: number;
    name: string;
  }
  
  function binarySearch(employees: Employee[], targetId: number): Employee | null {
    let left = 0;
    let right = employees.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const employee = employees[middle];
  
      if (employee.id === targetId) {
        return employee;
      } else if (employee.id < targetId) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    return null;
  }

 // Contoh data karyawan yang telah terurut berdasarkan ID
const employees: Employee[] = [
    { id: 101, name: "Rani"},
    { id: 203, name: "Andi"},
    { id: 305, name: "Budi"},
    { id: 410, name: "Cindy"},
    { id: 520, name: "Dodi"},
    { id: 635, name: "Eka"},
    { id: 742, name: "Fani"},
  ];
  const targetId = 305;