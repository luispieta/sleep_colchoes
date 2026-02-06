package sleep.colchoes.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import sleep.colchoes.domain.endereco.EnderecoRepository;
import sleep.colchoes.domain.pedido.*;
import sleep.colchoes.domain.pessoa.PessoaRepository;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(
            @RequestBody @Valid DTOCadastrarPedido dados,
            UriComponentsBuilder uriBuilder
    ) {
        var cliente = pessoaRepository.getReferenceById(dados.clienteId());
        var vendedor = pessoaRepository.getReferenceById(dados.vendedorId());
        var endereco = enderecoRepository.getReferenceById(dados.enderecoEntregaId());

        var pedido = new Pedido(cliente, endereco, vendedor, dados.itens(), dados);
        pedidoRepository.save(pedido);

        var uri = uriBuilder
                .path("/pedidos/{id}")
                .buildAndExpand(pedido.getId())
                .toUri();

        return ResponseEntity.created(uri).body(new DTODetalhamentoPedido(pedido));
    }

    @GetMapping
    public ResponseEntity listar(@PageableDefault(size = 10) Pageable paginacao) {
        var page = pedidoRepository.findAll(paginacao).map(DTOListagemPedido::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity atualizar(
            @PathVariable Long id,
            @RequestBody @Valid DTOAtualizarPedido dados
    ) {
        var pedido = pedidoRepository.getReferenceById(id);

        var cliente = dados.clienteId() != null
                ? pessoaRepository.getReferenceById(dados.clienteId())
                : null;

        var vendedor = dados.vendedorId() != null
                ? pessoaRepository.getReferenceById(dados.vendedorId())
                : null;

        var endereco = dados.enderecoEntregaId() != null
                ? enderecoRepository.getReferenceById(dados.enderecoEntregaId())
                : null;

        pedido.atualizarInformacoes(cliente, endereco, vendedor, dados.itens(), dados);

        return ResponseEntity.ok(new DTODetalhamentoPedido(pedido));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        pedidoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable Long id) {
        var pedido = pedidoRepository.getReferenceById(id);
        return ResponseEntity.ok(new DTODetalhamentoPedido(pedido));
    }
}
