<template>
  <el-table
    :data="list"
    border
    fit
    highlight-current-row
    style="width: 100%"
  >
    <el-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="请给我点时间！"
    >
      <template slot-scope="{row}">
        <span>{{ row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      width="180px"
      align="center"
      label="Name"
    >
      <template slot-scope="{row}">
        <b>{{ row.name }}</b>
      </template>
    </el-table-column>

    <el-table-column
      min-width="240px"
      label="Title"
    >
      <template slot-scope="{row}">
        <span>{{ row.title }}&ensp;</span>
        <el-tag v-if="row.type==='c'">{{ row.vanguard }}</el-tag>
        <el-tag v-if="row.type==='ETF'">{{ row.category }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      min-width="240px"
      label="Tag"
    >
      <template slot-scope="{row}">
        <span>{{ row.tag }}</span>
      </template>
    </el-table-column>

    <el-table-column
      width="180px"
      align="center"
      label="Issuer"
    >
      <template slot-scope="{row}">
        <span>{{ row.issuer }}</span>
      </template>
    </el-table-column>

    <el-table-column
      width="120px"
      label="Morningstar"
    >
      <template slot-scope="{row}">
        <svg-icon
          v-for="n in +row.importance"
          :key="n"
          name="star"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { getArticles } from '@/api/articles'

@Component({
  name: 'TabPane'
})
export default class extends Vue {
  @Prop({ default: 'ETF' }) private type!: string

  private list = null
  private listQuery = {
    page: 1,
    limit: 125,
    type: this.type,
    sort: 'id'
  }

  private loading = false

  created() {
    this.getList()
  }

  private async getList() {
    this.loading = true
    this.$emit('create') // for test
    const { data } = await getArticles(this.listQuery)
    this.list = data.items
    // Just to simulate the time of the request
    setTimeout(() => {
      this.loading = false
    }, 0.5 * 1000)
  }
}
</script>
