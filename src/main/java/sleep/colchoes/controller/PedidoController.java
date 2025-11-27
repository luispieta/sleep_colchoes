//package sleep.colchoes.controller;
//
//import jakarta.validation.Valid;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import sleep.colchoes.domain.pedido.DTOCadastrarPedido;
//import sleep.colchoes.domain.pedido.PedidoRepository;
//
//@RestController
//@RequestMapping("/pedido")
//public class PedidoController {
//
//    @Autowired
//    private PedidoRepository repository;
//
//    public ResponseEntity cadastrar(@RequestBody @Valid DTOCadastrarPedido dados) {}
//
//    //Serve para excluir definitivamente o registro no banco de dados
//    @DeleteMapping("/{id}")
//    @Transactional
//    public void excluir(
//            //Serve para informar o id na URL
//            @PathVariable Long id) {
//        repository.deleteById(id);
//
//    }
//
//}
