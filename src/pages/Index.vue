<template>
  <q-page>
    <div class="row q-pa-md q-gutter-md">
      <q-card>
        <q-card-section>
          Welcome,
          {{ merchant.name }}
        </q-card-section>
        <q-card-section>
          {{ $t("merchant.balance") }}: {{ (merchant.balance || 0) / 100 }}
        </q-card-section>
        <q-card-section>
          {{ $t("merchant.totalIncome") }}: {{ (merchant.totalIncome || 0) / 100 }}
        </q-card-section>
        <!-- <q-card-section>
          {{ $t("merchant.totalRealPayout") }}: {{ merchant.totalRealPayout || 0 }}
        </q-card-section> -->
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { merchant as merchantApi } from "../api/merchant";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const { t: $t } = useI18n();
    const $q = useQuasar();

    const merchant = ref({});
    onMounted(async () => {
      const m = await merchantApi.get();
      if (m.code === 0) {
        merchant.value = m.data;
      } else {
        $q.dialog({
          message: $t("failed"),
        });
      }
    });
    return {
      merchant,
    };
  },
});
</script>
