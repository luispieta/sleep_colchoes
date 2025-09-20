package sleep.colchoes.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import sleep.colchoes.domain.empresa.*;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {

    @Autowired
    private EmpresaRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DTOCadastrarEmpresa dados, UriComponentsBuilder uriBuilder) {
        var empresa = new Empresa(dados);
        repository.save(empresa);

        var uri = uriBuilder.path("/pessoas/{id}").buildAndExpand(empresa.getId()).toUri();
        return ResponseEntity.created(uri).body(new DTODetalhamentoEmpresa(empresa));

    }

    @GetMapping
    public ResponseEntity listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = repository.findAll(paginacao).map(DTOListagemEmpresa::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DTOAtualizarEmpresa dados) {
        var empresa = repository.getReferenceById(dados.id());
        empresa.atualizarInformacoes(dados);
        return ResponseEntity.ok(new DTODetalhamentoEmpresa(empresa));

    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        var empresa = repository.getReferenceById(id);
        empresa.excluir();
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable Long id) {
        var empresa = repository.getReferenceById(id);
        return ResponseEntity.ok(new DTODetalhamentoEmpresa(empresa));
    }

}
