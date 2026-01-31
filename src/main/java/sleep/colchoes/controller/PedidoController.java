package sleep.colchoes.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import sleep.colchoes.domain.pedido.*;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DTOCadastrarPedido dados, UriComponentsBuilder uriBuilder) {
        var pedido = new Pedido(dados);
        repository.save(pedido);

        var uri = uriBuilder.path("/pedidos/{id}").buildAndExpand(pedido.getId()).toUri();
        return ResponseEntity.created(uri).body(new DTODetalhamentoPedido(pedido));

    }

    @GetMapping
    public ResponseEntity listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = repository.findAll(paginacao).map(DTOListagemPedido::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity atualizar(
            @PathVariable Long id,
            @RequestBody @Valid DTOAtualizarPedido dados) {

        var pedido = repository.getReferenceById(id);
        pedido.atualizarInformacoes(dados);

        return ResponseEntity.ok(new DTODetalhamentoPedido(pedido));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);

    }

    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable("id") Long id) {
        var pedido = repository.getReferenceById(id);
        return ResponseEntity.ok(new DTODetalhamentoPedido(pedido));
    }

}
