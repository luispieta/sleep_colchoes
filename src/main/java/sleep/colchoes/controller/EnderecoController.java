package sleep.colchoes.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import sleep.colchoes.domain.endereco.*;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {

    @Autowired
    private EnderecoRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DTOCadastrarEndereco dados, UriComponentsBuilder uriBuilder) {
        var endereco = new Endereco(dados);
        repository.save(endereco);

        var uri = uriBuilder.path("/enderecos/{id}").buildAndExpand(endereco.getId()).toUri();
        return ResponseEntity.created(uri).body(new DTODetalhamentoEndereco(endereco));

    }

    @GetMapping
    public ResponseEntity listar(@PageableDefault(size = 10, sort = {"cidade"}) Pageable paginacao) {
        var page = repository.findAll(paginacao).map(DTOListagemEndereco::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DTOAtualizarEndereco dados) {
        var endereco = repository.getReferenceById(dados.id());
        endereco.atualizar(dados);
        return ResponseEntity.ok(new DTODetalhamentoEndereco(endereco));

    }

    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable Long id) {
        var endereco = repository.getReferenceById(id);
        return ResponseEntity.ok(new DTODetalhamentoEndereco(endereco));
    }

}
