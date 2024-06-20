// data.ts

export const petColumns = [
    { name: 'Loại thú cưng', uid: 'petType' },
    { name: 'Tên thú cưng', uid: 'petName' },
    { name: 'Cân nặng', uid: 'petWeight' },
    { name: 'Tuổi', uid: 'petAge' },
    { name: 'Giới tính', uid: 'petGender' },
    { name: 'ACTIONS', uid: 'actions' }
];

export const pets = [
    {
        id: 1,
        petType: 'Chó',
        petName: 'Kiệt',
        petWeight: "10",
        petAge: "5",
        petGender: 'Đực',
    },
    {
        id: 2,
        petType: 'Mèo',
        petName: 'Thoại',
        petWeight: "5",
        petAge: "3",
        petGender: 'Cái',
    },
    // Add more pets as needed
];
