// import { useState } from "react";
// import { Modal, ModalBody, ModalFooter, Button } from "@nextui-org/react";

// export const DeleteAccountModal = ({ isOpen, onClose, onDelete, user }) => {
//     return (
//         <Modal isOpen={isOpen} onClose={onClose} centered>
//             <ModalBody>
//                 <p>Bạn có chắc chắn muốn xóa tài khoản của {user.name}?</p>
//             </ModalBody>
//             <ModalFooter>
//                 <Button  color="error" onClick={() => onDelete(user)}>
//                     Xác nhận
//                 </Button>
//                 <Button onClick={onClose}>
//                     Hủy
//                 </Button>
//             </ModalFooter>
//         </Modal>
//     );
// };