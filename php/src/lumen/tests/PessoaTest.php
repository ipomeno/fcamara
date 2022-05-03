<?php

class PessoaTest extends TestCase {

  public function testLista() {
    $response = $this->call('get', '/pessoa');
    $list = json_decode($response->getContent());
    $item = $list[0];
    $this->assertEquals($item->nome, 'Fernando');
  }

  public function testFind() {
    $response = $this->call('get', '/pessoa/3');
    $item = json_decode($response->getContent());
    $this->assertEquals($item->nome, 'Marcela');
  }

}
