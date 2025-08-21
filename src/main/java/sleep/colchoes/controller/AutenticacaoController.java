//package sleep.colchoes.controller;
//
//import jakarta.validation.Valid;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.token.TokenService;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import sleep.colchoes.domain.usuario.DTOAutenticacao;
//import sleep.colchoes.domain.usuario.Usuario;
//import sleep.colchoes.infra.security.DTOTokenJWT;
//
//@RestController
//@RequestMapping("/login")
//public class AutenticacaoController {
//
//    @Autowired
//    private TokenService tokenService;
//
//    @Autowired
//    private AuthenticationManager manager;
//
//    //@PostMapping
//    //public ResponseEntity efetuarLogin(@RequestBody @Valid DTOAutenticacao dados) {
//
//        //var authenticationToken = new UsernamePasswordAuthenticationToken(dados.login(), dados.senha());
//        //var authentication = manager.authenticate(authenticationToken);
//        //var tokenJWT = tokenService.gerarToken((Usuario) authentication.getPrincipal());
//
//        //return ResponseEntity.ok(new DTOTokenJWT(tokenJWT));
//
//    //}
//
//}
